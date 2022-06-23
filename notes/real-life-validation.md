


## Option: [Data Annotations](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations)

### Example:

```csharp

public class SnakeInfo
{
	public Guid ID { get; init; } = Guid.NewGuid();

	[Required]
	[MaxLength(5)]
	[MinLength(1)]
	public string Name { get; init; } = String.Empty;
}

```

#### Thoughts
* Pros
  - Simple
  - Native
* Cons
  - Mixes burdens
  - Doesn't scale with complex models
  - Hard to test





## Option: [Fluent Validation](https://docs.fluentvalidation.net/)

Set up a validator:
```csharp

public class SnakeValidator : FluentValidation.AbstractValidator<Snake>
{
    public SnakeValidator()
    {
        RuleFor(snake => snake.Name).Length(1, 5);
    }
}

```

Invoke manually:
```csharp
[HttpPost()]
public Task<SnakeInfo> Post(Snake value)
{
	var validator = new SnakeValidator();
	var result = validator.Validate(value);

	if (!result.IsValid)
	{
		throw new Exception("Bogus!");
	}
	return this.service.Create(value);
}
```

#### Thoughts
* Pros
  - Better seperation of concerns
* Cons
  - One more dependency
  - Not very composable




## Option: [Custom ModelValidatorProvider](https://docs.microsoft.com/en-us/dotnet/api/system.web.mvc.modelvalidatorprovider)

Add a custom validator provider:
```csharp
public class SimpleModelValidatorProvider : IModelValidatorProvider
{
    public void CreateValidators(ModelValidatorProviderContext context)
    {
        if (context.ModelMetadata.ContainerType == typeof(Snake))
        {
            context.Results.Add(new ValidatorItem
            {
                Validator = new SnakeModelValidator(),
                IsReusable = true
            });
        }
    }
}

```

And a model validator:

```csharp

public class SnakeModelValidator : IModelValidator
{
    private static readonly object _emptyValidationContextInstance = new object();
    public IEnumerable<ModelValidationResult> Validate(ModelValidationContext validationContext)
    {
        var validationResults = new List<ModelValidationResult>();


        if (validationContext.ModelMetadata.Name == nameof(Snake.Name) && String.IsNullOrEmpty((string?)validationContext.Model))
        {
            var validationResult = new ModelValidationResult(nameof(Snake.Name), "Name is required");

            validationResults.Add(validationResult);

        }
        return validationResults;
    }
}
```



### Thoughts
* Pros
  - Seperation of concerns
  - Composable
  - Testable
* Cons 
  - Smaller pieces
  - More thinking