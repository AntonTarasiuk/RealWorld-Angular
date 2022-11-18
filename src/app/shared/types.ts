type User = {
    bio: string,
    email: string,
    image: string,
    token: string,
    username: string,
};

type UserUpdate = {
    bio: string,
    email: string,
    image: string,
}

type Registr = {
    user: {
        username?: "string",
        email: "string",
        password: "string"
    }
}

type Login = {
    user: {
        email: "string",
        password: "string"
    }
}

export { User, Registr, Login, UserUpdate }