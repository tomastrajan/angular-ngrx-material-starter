'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">angular-ngrx-material-starter documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="changelog.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CHANGELOG
                        </a>
                    </li>
                    <li class="link">
                            <a href="contributing.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CONTRIBUTING
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-571d25d521cc2d86ef7f95fa6f55b67b"' : 'data-target="#xs-components-links-module-AppModule-571d25d521cc2d86ef7f95fa6f55b67b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-571d25d521cc2d86ef7f95fa6f55b67b"' : 'id="xs-components-links-module-AppModule-571d25d521cc2d86ef7f95fa6f55b67b"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-CoreModule-e3852aaa95857994fe8ea521f00058bb"' : 'data-target="#xs-injectables-links-module-CoreModule-e3852aaa95857994fe8ea521f00058bb"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-CoreModule-e3852aaa95857994fe8ea521f00058bb"' : 'id="xs-injectables-links-module-CoreModule-e3852aaa95857994fe8ea521f00058bb"' }>
                                        <li class="link">
                                            <a href="injectables/AnimationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AnimationsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStorageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LocalStorageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>NotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TitleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>TitleService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ExamplesModule.html" data-type="entity-link">ExamplesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ExamplesModule-e5d89552ae03d1dd6c087cc9913786c3"' : 'data-target="#xs-components-links-module-ExamplesModule-e5d89552ae03d1dd6c087cc9913786c3"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ExamplesModule-e5d89552ae03d1dd6c087cc9913786c3"' : 'id="xs-components-links-module-ExamplesModule-e5d89552ae03d1dd6c087cc9913786c3"' }>
                                        <li class="link">
                                            <a href="components/AuthenticatedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthenticatedComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CrudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CrudComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ExamplesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExamplesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NotificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ParentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StockMarketContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StockMarketContainerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TodosContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TodosContainerComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ExamplesModule-e5d89552ae03d1dd6c087cc9913786c3"' : 'data-target="#xs-injectables-links-module-ExamplesModule-e5d89552ae03d1dd6c087cc9913786c3"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ExamplesModule-e5d89552ae03d1dd6c087cc9913786c3"' : 'id="xs-injectables-links-module-ExamplesModule-e5d89552ae03d1dd6c087cc9913786c3"' }>
                                        <li class="link">
                                            <a href="injectables/StockMarketService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>StockMarketService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ExamplesRoutingModule.html" data-type="entity-link">ExamplesRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SettingsModule.html" data-type="entity-link">SettingsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SettingsModule-a9235d721e9af9e505eedc70572a4add"' : 'data-target="#xs-components-links-module-SettingsModule-a9235d721e9af9e505eedc70572a4add"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SettingsModule-a9235d721e9af9e505eedc70572a4add"' : 'id="xs-components-links-module-SettingsModule-a9235d721e9af9e505eedc70572a4add"' }>
                                        <li class="link">
                                            <a href="components/SettingsContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsContainerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SharedModule-cf89e60681e8f77f57ffeddbc0b0c12f"' : 'data-target="#xs-components-links-module-SharedModule-cf89e60681e8f77f57ffeddbc0b0c12f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SharedModule-cf89e60681e8f77f57ffeddbc0b0c12f"' : 'id="xs-components-links-module-SharedModule-cf89e60681e8f77f57ffeddbc0b0c12f"' }>
                                        <li class="link">
                                            <a href="components/BigInputActionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BigInputActionComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BigInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BigInputComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/StaticModule.html" data-type="entity-link">StaticModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-StaticModule-6c399c562e3cc88459c3a4a3d3f7cf79"' : 'data-target="#xs-components-links-module-StaticModule-6c399c562e3cc88459c3a4a3d3f7cf79"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-StaticModule-6c399c562e3cc88459c3a4a3d3f7cf79"' : 'id="xs-components-links-module-StaticModule-6c399c562e3cc88459c3a4a3d3f7cf79"' }>
                                        <li class="link">
                                            <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FeaturesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeaturesComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/StaticRoutingModule.html" data-type="entity-link">StaticRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/TestingModule.html" data-type="entity-link">TestingModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/ActionAuthLogin.html" data-type="entity-link">ActionAuthLogin</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionAuthLogout.html" data-type="entity-link">ActionAuthLogout</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionBooksDeleteOne.html" data-type="entity-link">ActionBooksDeleteOne</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionBooksUpsertOne.html" data-type="entity-link">ActionBooksUpsertOne</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionFormReset.html" data-type="entity-link">ActionFormReset</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionFormUpdate.html" data-type="entity-link">ActionFormUpdate</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionSettingsChangeAnimationsElements.html" data-type="entity-link">ActionSettingsChangeAnimationsElements</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionSettingsChangeAnimationsPage.html" data-type="entity-link">ActionSettingsChangeAnimationsPage</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionSettingsChangeAnimationsPageDisabled.html" data-type="entity-link">ActionSettingsChangeAnimationsPageDisabled</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionSettingsChangeAutoNightMode.html" data-type="entity-link">ActionSettingsChangeAutoNightMode</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionSettingsChangeLanguage.html" data-type="entity-link">ActionSettingsChangeLanguage</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionSettingsChangeStickyHeader.html" data-type="entity-link">ActionSettingsChangeStickyHeader</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionSettingsChangeTheme.html" data-type="entity-link">ActionSettingsChangeTheme</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionSettingsPersist.html" data-type="entity-link">ActionSettingsPersist</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionStockMarketRetrieve.html" data-type="entity-link">ActionStockMarketRetrieve</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionStockMarketRetrieveError.html" data-type="entity-link">ActionStockMarketRetrieveError</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionStockMarketRetrieveSuccess.html" data-type="entity-link">ActionStockMarketRetrieveSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionTodosAdd.html" data-type="entity-link">ActionTodosAdd</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionTodosFilter.html" data-type="entity-link">ActionTodosFilter</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionTodosPersist.html" data-type="entity-link">ActionTodosPersist</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionTodosRemoveDone.html" data-type="entity-link">ActionTodosRemoveDone</a>
                    </li>
                    <li class="link">
                        <a href="classes/ActionTodosToggle.html" data-type="entity-link">ActionTodosToggle</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AnimationsService.html" data-type="entity-link">AnimationsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/AppErrorHandler.html" data-type="entity-link">AppErrorHandler</a>
                            </li>
                            <li class="link">
                                <a href="injectables/AuthEffects.html" data-type="entity-link">AuthEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/BooksEffects.html" data-type="entity-link">BooksEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CustomSerializer.html" data-type="entity-link">CustomSerializer</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FormEffects.html" data-type="entity-link">FormEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LocalStorageService.html" data-type="entity-link">LocalStorageService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MockStore.html" data-type="entity-link">MockStore</a>
                            </li>
                            <li class="link">
                                <a href="injectables/NotificationService.html" data-type="entity-link">NotificationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SettingsEffects.html" data-type="entity-link">SettingsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/StockMarketEffects.html" data-type="entity-link">StockMarketEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/StockMarketService.html" data-type="entity-link">StockMarketService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TitleService.html" data-type="entity-link">TitleService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TodosEffects.html" data-type="entity-link">TodosEffects</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"' }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                    <li class="link">
                        <a href="interceptors/HttpErrorInterceptor.html" data-type="entity-link">HttpErrorInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AuthState.html" data-type="entity-link">AuthState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Book.html" data-type="entity-link">Book</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BookState.html" data-type="entity-link">BookState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ExamplesState.html" data-type="entity-link">ExamplesState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Feature.html" data-type="entity-link">Feature</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Form.html" data-type="entity-link">Form</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormState.html" data-type="entity-link">FormState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RouterStateUrl.html" data-type="entity-link">RouterStateUrl</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SettingsState.html" data-type="entity-link">SettingsState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-1.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-2.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Stock.html" data-type="entity-link">Stock</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/StockMarketState.html" data-type="entity-link">StockMarketState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Todo.html" data-type="entity-link">Todo</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TodosState.html" data-type="entity-link">TodosState</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
