---
sidebar_position: 6
---

# Redis

## Description

For distributed systems and architectures such as microservices, this library supports Redis and you need to configure it according to the code samples below. Please note that you cannot use the in-memory cache model simultaneously with Redis in your system.




## Configuration

```csharp

builder.Services.AddBabyCaptcha(babyOption =>
{

    babyOption.CacheConfiguration.UseRedis(option =>
    {
        option.Host = "Redis_Host_address";
        option.Port = 6379;  //Redis Server Port
        option.Password = "Redis_Server_Password";
        option.Key = "Custom_Name_for_Cache";
        option.CacheExpireTime = TimeSpan.FromMinutes(5);
        option.AbortOnConnectFail = false;
        option.Ssl = false;
    });
});


```