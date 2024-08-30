# Text-Base Captcha Configuration

## Description

One of the types of CAPTCHA supported by this library is the Text-Based CAPTCHA. This type generates an image that can include text in the form of numbers, letters, or a combination of both. Additionally, the image itself can be customized. The following code samples show all the parameters that you can configure to customize this type of CAPTCHA.

## Configuration

```csharp

builder.Services.AddBabyCaptcha(babyOption =>
{

    babyOption.ImageDrawingConfiguration.Config(option =>
    {
       option.CaptchaLenght = 5;
       option.FontSize = 29;
       option.Width = 100;
       option.TextType = TextType.Numbers;
       option.Height = 50;
       option.NoiseRate = 200;
       option.DrawLines = 3;
       option.BackgroundColor = new BabyColor[] { BabyColor.FromRgb(0, 0, 0) };
       ....//Other option
       

    });
});


```