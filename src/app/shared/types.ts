type User = {
    bio: string,
    email: string,
    image: string,
    token: string,
    username: string,
};

type Registr = {
    user: {
        username?: "string",
        email: "string",
        password: "string"
    }
};

type Login = {
    user: {
        email: "string",
        password: "string"
    }
};

type Tags = Array<string>;

type Article = {
    slug: "string",
    title: "string",
    description: "string",
    body: "string",
    tagList: Array<string>,
    createdAt: "string",
    updatedAt: "string",
    favorited: boolean,
    favoritesCount: number,
    author: {
        username: "string",
        bio: "string",
        image: "string",
        following: boolean
    }
}

interface IArticles {
    articles: Array<Article>,
    articlesCount: number
}

export { User, Registr, Login, IArticles, Article, Tags }