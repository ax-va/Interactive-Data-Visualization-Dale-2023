# Since Python 3.10
for index, value in enumerate(["value1", "value2", "value3"]):
    match value:
        case "value1":
            print(index)
            # 0
        case "value2":
            print(index)
            # 1
        case "value3":
            print(index)
            # 2
