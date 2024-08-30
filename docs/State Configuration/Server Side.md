---
sidebar_position: 1
---

# Server Side

## Description

As mentioned, when the CAPTCHA creation service is called, the system generates and stores a state after creating the CAPTCHA. You can change the storage location of the state to server-side storage. In this case, the state is no longer stored in the client-side cookie. Instead, the cookie will not contain the state, and the state will be maintained on the server side. You can enable and customize this as shown below. Please note that you cannot have both state storage methods enabled simultaneously.

## Configuration

```csharp

builder.Services.AddBabyCaptcha(babyOption =>
{

    babyOption.StateConfiguration.UseServerSideState(option =>
    {
        option.Key = "cookie_key";
        option.Expires = TimeSpan.FromMinutes(10);

    });
});
```