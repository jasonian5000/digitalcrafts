class BankAccount:
    def __init__(self, account_number, balance):
        self.balance = balance
        self.account_number = account_number

    def deposit(self, addFunds):
        self.balance += addFunds

    def withdraw(self, subFunds):
        self.balance -= subFunds

    def transfer_funds(self, transFunds, fromAccount, toAccount):
        toAccount.deposit(transFunds)
        fromAccount.withdraw(transFunds)      
    

checking_account = BankAccount("FD332", 100)
savings_account = BankAccount("FD333", 100)
checking_account.transfer_funds(50, checking_account, savings_account) 
print(checking_account.balance)
print(savings_account.balance)