---
sidebar_position: 2
---

# Client Side 

## Description

When the CAPTCHA creation service is called, the system generates and stores a state after creating the CAPTCHA. By default, the state is stored on the client side, meaning it is saved in a client-side cookie. You can customize this behavior as shown below.


## Configuration

```csharp

builder.Services.AddBabyCaptcha(babyOption =>
{

    babyOption.StateConfiguration.UseClientSideState(option =>
    {
        option.Key = "cookie_key";
        option.Expires = TimeSpan.FromMinutes(10);
    });
});
```