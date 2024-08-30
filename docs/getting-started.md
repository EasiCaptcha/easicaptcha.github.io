# Getting Started

## Basic Usage

To integrate **BabyCaptcha** into your .NET application, follow these three steps to configure the service, use it in a action, and validate CAPTCHA submissions.

## 1. Adding BabyCaptcha to `IServiceCollection`

Start by configuring **BabyCaptcha** in your `Program.cs` file. You need to add the CAPTCHA service to the service collection with the required options.

### Example Configuration

Open `Program.cs` and add the following code:

```csharp

// Add CAPTCHA service with required options
builder.Services.AddBabyCaptcha(babyOption =>
{
    // Key used for encryption within the library. Ensure to keep this key safe and secure.
    babyOption.EncryptKey = "Encrypt_Key";


    // Name of the key used in the body or header to store the CAPTCHA value.
    // This is the key used to retrieve the CAPTCHA response from the request.
    babyOption.CaptchaResponseSendingKey = "captcha_sending_key";

});
```

## 2. Calling the CAPTCHA Service in a Action

Next, create a controller to generate and return CAPTCHA. Here’s an example:

```csharp

public class CaptchaController : Controller
{
    private readonly ICaptchaService _captchaService;


    public CaptchaController(ICaptchaService captchaService)
    {
        _captchaService = captchaService;
    }

    // Action to generate and return CAPTCHA
    [HttpGet("api/captcha")]
    public async Task<FileContentResult> GetCaptcha()
    {
        // Text-Base is one of the captcha type which library supports.
        //its about an image which contains random text 
	return await _captchaService.TextBase();

    }
}
```

### Captcha Voice Play

You can also have the generated CAPTCHA presented in an audio format, which can be done as shown below.

```csharp

public class CaptchaController : Controller
{
    private readonly ICaptchaService _captchaService;


    public CaptchaController(ICaptchaService captchaService)
    {
        _captchaService = captchaService;
    }

    [HttpGet("api/captcha/play")]
    public async Task<FileContentResult> PlayCaptcha()
    {
      return await _captchaService.TextBaseAudioPlay();
    }
}
```



## 3. Validating CAPTCHA in a Controller Action

Apply the BabyCaptchaValidatorAttribute to a controller action that requires CAPTCHA validation:

```csharp

using Microsoft.AspNetCore.Mvc;

public class FormController : Controller
{
    [HttpPost("api/validate")]
    [BabyCaptchaValidator] // Apply CAPTCHA validation attribute
    public IActionResult ValidateCaptcha([FromBody] Request request)
    {
        return Ok("Form submitted successfully.");
    }
}

```
### Request Requirements

In default path the library consider captcha value will be send into a post request with a body.
Ensure that Request includes a property with the same name as the CaptchaResponseSendingKey specified in Program.cs. For example, if the key is "BabyCaptcha", your form model should have a property named BabyCaptcha:

```csharp
public class Request
{
    public string BabyCaptcha { get; set; } // Property name must match the key used in Program.cs
    // Other form properties
}
```