import { EnterpriseController } from "./controller/EnterpriseController"
import { EmployeeController } from './controller/EmployeeController'

export const Routes = [{
    method: "get",
    route: "/enterprise",
    controller: EnterpriseController,
    action: "all"
}, {
    method: "get",
    route: "/enterprise/:id",
    controller: EnterpriseController,
    action: "one"
}, {
    method: "post",
    route: "/enterprise",
    controller: EnterpriseController,
    action: "save"
}, {
    method: "delete",
    route: "/enterprise/:id",
    controller: EnterpriseController,
    action: "remove"
}, {
    method: "get",
    route: "/employee",
    controller: EmployeeController,
    action: "all"
}, {
    method: "get",
    route: "/employee/:id",
    controller: EmployeeController,
    action: "one"
}, {
    method: "post",
    route: "/employee",
    controller: EmployeeController,
    action: "save"
}, {
    method: "delete",
    route: "/employee/:id",
    controller: EmployeeController,
    action: "remove"
},
]

