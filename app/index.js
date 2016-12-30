'use strict';
/**
 * <plusmancn@gmail.com> created at 2016.12.30 10:43:10
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 *
 * 入口文件
 */
const yargv = require('yargs').argv;
// 变量可选值：development, production
process.env.NODE_ENV = (yargv.env || 'development').toLowerCase();
