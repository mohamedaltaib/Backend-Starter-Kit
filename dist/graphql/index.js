'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _list = require('./list');

exports.default = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => _extends({}, _list.listQueries)
  }),
  mutation: new _graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: () => _extends({}, _list.listMutations)
  })
});