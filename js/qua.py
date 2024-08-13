import math

# Get user inputs for coefficients
a = float(input("Enter coefficient a: "))
b = float(input("Enter coefficient b: "))
c = float(input("Enter coefficient c: "))

# Calculate discriminant
discriminant = b**2 - 4*a*c

# Check if the equation has real roots
if discriminant >= 0:
    # Calculate the roots
    root1 = (-b + math.sqrt(discriminant)) / (2*a)
    root2 = (-b - math.sqrt(discriminant)) / (2*a)
    
    # Print the roots
    print("Root 1:", root1)
    print("Root 2:", root2)
else:
    print("The equation has no real roots.")