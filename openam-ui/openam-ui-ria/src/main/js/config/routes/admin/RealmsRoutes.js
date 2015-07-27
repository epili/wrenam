/**
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
 * Header, with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions copyright [year] [name of copyright owner]".
 *
 * Copyright 2015 ForgeRock AS.
 */

/*global define*/
define("config/routes/admin/RealmsRoutes", function () {
    var scopedByRealm = function (fragment) {
        return new RegExp("^realms\/([^\/]+)\/" + fragment + "$");
    },
    defaultScopedByRealm = function (fragment) {
        return scopedByRealm("?(?:" + fragment + ")?");
    },
    routes = {
        "realms": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmsListView",
            url: /^realms\/*$/,
            pattern: "realms",
            role: "ui-admin"
        },
        "realmsDashboard": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/dashboard/DashboardView",
            url: defaultScopedByRealm("dashboard\/?"),
            pattern: "realms/?/dashboard",
            role: "ui-admin",
            forceUpdate: true
        },
        "realmsAuthenticationSettings": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/authentication/SettingsView",
            url: scopedByRealm("authentication\/?(?:settings\/?)?"),
            pattern: "realms/?/authentication/settings",
            role: "ui-admin",
            forceUpdate: true
        },
        "realmsAuthenticationChains": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/authentication/ChainsView",
            url: scopedByRealm("authentication\/chains\/?"),
            pattern: "realms/?/authentication/chains",
            role: "ui-admin",
            forceUpdate: true
        },
        "realmsAuthenticationChainEdit": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/authentication/chains/EditChainView",
            url: scopedByRealm("authentication\/chains\/([^\/]+)"),
            pattern: "realms/?/authentication/chains/?",
            role: "ui-admin"
        },
        "realmsAuthenticationModules": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/authentication/ModulesView",
            url: scopedByRealm("authentication\/modules\/?"),
            pattern: "realms/?/authentication/modules",
            role: "ui-admin",
            forceUpdate: true
        },
        "realmsAuthenticationModuleEdit": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/authentication/modules/EditModuleView",
            url: scopedByRealm("authentication\/modules\/([^\/]+)\/([^\/]+)"),
            pattern: "realms/?/authentication/modules/?/?",
            role: "ui-admin"
        },
        "realmsServices": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/services/ServicesView",
            url: scopedByRealm("services\/?"),
            pattern: "realms/?/services",
            role: "ui-admin"
        },
        "realmsDataStores": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/dataStores/DataStoresView",
            url: scopedByRealm("dataStores\/?"),
            pattern: "realms/?/dataStores",
            role: "ui-admin"
        },
        "realmsPrivileges": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/privileges/PrivilegesView",
            url: scopedByRealm("privileges\/?"),
            pattern: "realms/?/privileges",
            role: "ui-admin"
        },
        "realmsApplications": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/policies/applications/ApplicationsView",
            url: scopedByRealm("applications\/list"),
            pattern: "realms/?/applications/list",
            role: "ui-admin"
        },
        "realmsApplicationEdit": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/policies/applications/EditApplicationView",
            url: scopedByRealm("applications\/edit\/([^\/]*)"),
            pattern: "realms/?/applications/edit/?",
            role: "ui-admin"
        },
        "realmsResourceTypes": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/policies/resourceTypes/ResourceTypesView",
            url: scopedByRealm("resourceTypes\/list"),
            pattern: "realms/?/resourceTypes/list",
            role: "ui-admin"
        },
        "realmsResourceTypeEdit": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/policies/resourceTypes/EditResourceTypeView",
            url: scopedByRealm("resourceTypes\/edit\/([^\/]*)"),
            pattern: "realms/?/resourceTypes/edit/?",
            role: "ui-admin"
        },
        "realmsSubjects": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/subjects/SubjectsView",
            url: scopedByRealm("subjects\/?"),
            pattern: "realms/?/subjects",
            role: "ui-admin"
        },
        "realmsAgents": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/agents/AgentsView",
            url: scopedByRealm("agents\/?"),
            pattern: "realms/?/agents",
            role: "ui-admin"
        },
        "realmsSTS": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/sts/STSView",
            url: scopedByRealm("sts\/?"),
            pattern: "realms/?/sts",
            role: "ui-admin"
        },
        "realmsScripts": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/scripts/ScriptsView",
            url: scopedByRealm("scripts\/list"),
            pattern: "realms/?/scripts/list",
            role: "ui-admin",
            forceUpdate: true
        },
        "realmsScriptEdit": {
            view: "org/forgerock/openam/ui/admin/views/realms/RealmTreeNavigationView",
            page: "org/forgerock/openam/ui/admin/views/realms/scripts/EditScriptView",
            url: scopedByRealm("scripts\/edit\/([^\/]*)"),
            pattern: "realms/?/scripts/edit/?",
            role: "ui-admin",
            forceUpdate: true
        }
    };

    routes.realmDefault = routes.realmsDashboard;

    return routes;
});
