---
sidebar_position: 3
---

# In Memory

## Description

To enhance security, the library uses a caching service. By default, the caching service is of the In-Memory type. However, you can customize it as shown below and provide your preferred parameters.



## Configuration

```csharp

builder.Services.AddBabyCaptcha(babyOption =>
{

    babyOption.CacheConfiguration.UseInMemory(option =>
    {
        option.Key = "Custom_Name_for_Cache";
        option.ExpirationScanFrequency = TimeSpan.FromMinutes(1);
        option.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10);
        option.CompactionPercentage = 0.2;
        option.SlidingExpiration = TimeSpan.FromMinutes(10);
    });
});


```