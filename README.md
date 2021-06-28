# mero-mero-app
Dating App project build with .Net 5 and Angular 12

## Getting started

### Run Mero Mero backend
```bash
cd API
dotnet run
```

### .Net useful commands
```bash
# Create a .Net solution
dotnet new sln
# Create a new REST API project
dotnet new webapi -o API
# Add project to .Net solution
dotnet sln add API
# Trust .Net development certificates
dotnet dev-certs https --trust
# Run .Net solution
dotnet run
# Run .Net solution watching changes in project files
dotnet watch run
# Install Entity Framework tool
dotnet tool install --global dotnet-ef --version 5.0.7
# Create a new migration
dotnet ef migrations add InitialCreate -o Data/Migrations
# Update database
dotnet ef database update
```

