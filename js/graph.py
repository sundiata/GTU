import matplotlib.pyplot as plt

# Dummy data
x = [1, 2, 3, 4, 5]cd
y1 = [2, 4, 6, 8, 10]
y2 = [1, 3, 5, 7, 9]

# Plotting the first line
plt.plot(x, y1, label='Line 1')

# Plotting the second line
plt.plot(x, y2, label='Line 2')

# Adding labels and title
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Two-Line Graph')

# Displaying the legend
plt.legend()

# Displaying the graph
plt.show()