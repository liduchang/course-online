import Vue from "vue"
import Router from "vue-router"
import Login from "./views/login"
import Layout from "./views/layout"
import Welcome from "./views/welcome"
import Category from "./views/category"
import Course from "./views/course"
import Chapter from "./views/chapter"
import Section from "./views/section"
import Content from "./views/content"
import Teacher from "./views/teacher"
import File from "./views/file"
import User from "./views/system/user"
import Resource from "./views/resource"
import Role from "./views/system/role"
import Member from "./views/member"
import Sms from "./views/sms"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "/login",
        component: Login
    }, {
        path: "/",
        name: "admin",
        component: Layout,
        meta: { loginRequire: true },
        children: [{
            path: "welcome",
            name: "welcome",
            component: Welcome,
        }, {
            path: "business/category",
            name: "business/category",
            component: Category,
        }, {
            path: "business/course",
            name: "business/course",
            component: Course,
        }, {
            path: "business/chapter",
            name: "business/chapter",
            component: Chapter,
        }, {
            path: "business/section",
            name: "business/section",
            component: Section,
        }, {
            path: "business/content",
            name: "business/content",
            component: Content,
        }, {
            path: "business/teacher",
            name: "business/teacher",
            component: Teacher,
        }, {
            path: "business/member",
            name: "business/member",
            component: Member,
        }, {
            path: "business/sms",
            name: "business/sms",
            component: Sms,
        }, {
            path: "file/file",
            name: "file/file",
            component: File,
        }, {
            path: "system/user",
            name: "system/user",
            component: User,
        }, {
            path: "system/resource",
            name: "system/resource",
            component: Resource,
        }, {
            path: "system/role",
            name: "system/role",
            component: Role,
        }]
    }]
})
