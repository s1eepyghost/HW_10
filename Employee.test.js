    const Employee = require('../lib/employee');

    describe('Employee', () => {
        it("should create employee instance", () => {
            const e = new Employee();
            expect(typeof(e)).toBe("object")
        })
    })
    it("should have a name", () => {
        const name = "Liben"
        const e = new Employee(name)
        
        expect(e.name).toBe(name)
    })

    it("should have an id", () => {
        const id = 0;
        const e = new Employee("Liben", id)
        
        expect (e.id).toBe(id)
    })

    it("should have an email", () => {
        const email = "email@email.com"
        const e = new Employee("Liben", 0, email)
        expect(e.email).toBe(email)
    })

    test("Should be able to get name from method", () => {
        const name = "Jack"
        const e = new Employee(name, 0, "email@email.com")
        expect(e.getName()).toBe(name)
    })

    test("Should be able to get id from method", () => {
        const id = 0;
        const e = new Employee("Liben", id, "email@email.com")
        expect(e.getId()).toBe(id)
    })

    test("Should be able to get email from method", () => {
        const email = "email@email.com";
        const e = new Employee("Liben", 0, email)
        expect(e.getEmail()).toBe(email)
    })

    test("Should be able to get role from method", () => {
        const e = new Employee("Liben", 0, "email@email.com")
        const role = "Employee";

        const result = e.getRole()

        expect(result).toBe(role)
    })