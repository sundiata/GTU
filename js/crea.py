def create_matrix(rows, cols):
    matrix = []
    for i in range(rows):
        row = []
        for j in range(cols):
            element = int(input(f"Enter element at position ({i+1}, {j+1}): "))
            row.append(element)
        matrix.append(row)
    return matrix

def solve_matrix(matrix):
    # Add your matrix solving logic here
    pass

# Example usage
rows = int(input("Enter the number of rows: "))
cols = int(input("Enter the number of columns: "))

matrix = create_matrix(rows, cols)
solution = solve_matrix(matrix)

print("Solution:")
for row in solution:
    print(row)