class ATM:
    def __init__(self, balance):
        self.balance = balance

    def check_balance(self):
        return self.balance

    def deposit(self, amount):
        self.balance += amount
        return f"Deposited {amount} successfully. New balance: {self.balance}"

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient balance"
        self.balance -= amount
        return f"Withdrawn {amount} successfully. New balance: {self.balance}"


# Example usage
balance = float(input("Enter initial balance: "))
atm = ATM(balance)

print(atm.check_balance())

deposit_amount = float(input("Enter deposit amount: "))
print(atm.deposit(deposit_amount))

withdraw_amount = float(input("Enter withdrawal amount: "))
print(atm.withdraw(withdraw_amount))

print(atm.check_balance())