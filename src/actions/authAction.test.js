const rewire = require("rewire")
const authAction = rewire("./authAction")
const loginUserSuccess = authAction.__get__("loginUserSuccess")
const loginUserFail = authAction.__get__("loginUserFail")
// @ponicode
describe("authAction.emailChanged", () => {
    test("0", () => {
        let callFunction = () => {
            authAction.emailChanged("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            authAction.emailChanged("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            authAction.emailChanged("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            authAction.emailChanged("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            authAction.emailChanged(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("authAction.passwordChanged", () => {
    test("0", () => {
        let callFunction = () => {
            authAction.passwordChanged("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            authAction.passwordChanged("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            authAction.passwordChanged("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            authAction.passwordChanged("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            authAction.passwordChanged(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("authAction.alreadyLogin", () => {
    test("0", () => {
        let callFunction = () => {
            authAction.alreadyLogin("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            authAction.alreadyLogin("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            authAction.alreadyLogin("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            authAction.alreadyLogin("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            authAction.alreadyLogin(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            authAction.alreadyLogin(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("authAction.notLoginYet", () => {
    test("0", () => {
        let callFunction = () => {
            authAction.notLoginYet()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("authAction.logoutUser", () => {
    test("0", () => {
        let callFunction = () => {
            authAction.logoutUser()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("authAction.loginUser", () => {
    test("0", () => {
        let callFunction = () => {
            authAction.loginUser({ email: "email@Google.com", password: "accessdenied4u" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            authAction.loginUser({ email: "ponicode.com", password: "NoWiFi4you" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            authAction.loginUser({ email: "user@host:300", password: "!Lov3MyPianoPony" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            authAction.loginUser({ email: "user1+user2@mycompany.com", password: "NoWiFi4you" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            authAction.loginUser({ email: "user1+user2@mycompany.com", password: "YouarenotAllowed2Use" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            authAction.loginUser({ email: undefined, password: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loginUserSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            loginUserSuccess("da7588892", "user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            loginUserSuccess(12345, "user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            loginUserSuccess(12345, "user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            loginUserSuccess("da7588892", "username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            loginUserSuccess("c466a48309794261b64a4f02cfcc3d64", "user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            loginUserSuccess(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loginUserFail", () => {
    test("0", () => {
        let callFunction = () => {
            loginUserFail(() => 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            loginUserFail(() => "c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            loginUserFail(() => "da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            loginUserFail(() => "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            loginUserFail(() => 9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            loginUserFail(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
