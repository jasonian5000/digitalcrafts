# Create a class called User which consists of (first_name, last_name) properties.
# Create a class name Address which consists of (street, city, state, zip_code) properties.

class User:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.address = []

    def addAddress(self, address):
        self.address.append(address)


class Address:
    def __init__(self, street, city, state, zip_code):
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code

user1 = User("Dorthy", "Gale")
address1 = Address("Lollipop Lane", "Emerald City", "Oz", "12345")

user1.addAddress(address1)
print(user1.address)

