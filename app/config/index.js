'use strict';
/**
 * <plusmancn@gmail.com> created at 2016.08.09 10:35:53
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 *
 * 配置文件合并
 * 优先级为 local.js > ${NODE_ENV}.js > common.js
 * local.js 在 git 仓库中被忽略，用于本地配置
 */
const _ = require('lodash');

let localJs = {};
try {
    localJs = require('./local.js');
} catch (e) {
    // do something
}

module.exports = _.defaultsDeep(localJs, require(`./${process.env.NODE_ENV}.js`), require('./common.js'));
