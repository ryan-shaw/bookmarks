const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const mongoose = require('mongoose');
const Bookmarks = require('./models/bookmark');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookmark');

const BookmarkType = new graphql.GraphQLObjectType({
    name: 'bookmarks',
    fields: () => {
        return {
            id: {
                type: graphql.GraphQLID
            },
            name: {
                type: graphql.GraphQLString
            },
            url: {
                type: graphql.GraphQLString
            }
        };
    }
});

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            bookmarks: {
                type: new graphql.GraphQLList(BookmarkType),
                resolve: () => {
                    return Bookmarks.find({});
                }
            }
        };
    }
});

const MutationAdd = {
    type: BookmarkType,
    description: 'Add a Bookmark',
    args: {
        name: {
            name: 'Bookmark name',
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        url: {
            name: 'Bookmark URL',
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        }
    },
    resolve: (root, args) => {
        const newTodo = new Bookmarks({
            name: args.name,
            url: args.url
        });
        newTodo.id = newTodo._id;
        return newTodo.save();
    }
};

const MutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        add: MutationAdd
    }
});


const schema = new graphql.GraphQLSchema({
    query: queryType,
    mutation: MutationType
});

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
}));
app.use(require('./router'));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
