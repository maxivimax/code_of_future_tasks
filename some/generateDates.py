one = '<option selected value="'
two = '">'
three = "</option>"

a = 1

while a < 32:
    print(str(one) + str(a) + str(two) + str(a) + str(three))
    a = a + 1
