class Room:
    def __init__(self, size="", windows="", doors="", flooring="", type="", contents=[]):
        self.size = size
        self.windows = windows
        self.doors = doors
        self.flooring = flooring
        self.type = type
        self.contents = contents

    def nameOfRoom(self):
        print(self.name)
    def lowerCaseRoomName(self):
        self.name = self.name.lower()

livingRoom = Room(input("size: "), input("windows: "), input("doors: "), input("flooring: "), input("type: "), input("contents: "))

print(livingRoom.doors)