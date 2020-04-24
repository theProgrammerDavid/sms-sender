const mongoose = require('mongoose');
const express = require('express');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');

const Models = require('../models/models');
const Messages = require('../models/Message');
const Node = require('../models/Node');

AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
    rootPath: '/admin',
    resources: [
        Messages,Node
    ],
});

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)