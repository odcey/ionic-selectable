import { DoCheck, ElementRef, EventEmitter, IterableDiffers, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Form, InfiniteScroll, Item, ModalController, Platform } from 'ionic-angular';
import { IonicSelectableModalComponent } from './ionic-selectable-modal.component';
export declare class IonicSelectableComponent implements ControlValueAccessor, OnInit, OnDestroy, DoCheck {
    private _modalController;
    private ionForm;
    private _platform;
    private ionItem;
    private _iterableDiffers;
    private element;
    _cssClass: boolean;
    _isIos: boolean;
    _isMD: boolean;
    readonly _isMultipleCssClass: boolean;
    readonly _hasValueCssClass: boolean;
    readonly _hasPlaceholderCssClass: boolean;
    private _isOnSearchEnabled;
    private _isEnabled;
    private _shouldBackdropClose;
    private _isOpened;
    private _value;
    private _modal;
    private _itemsDiffer;
    private _hasObjects;
    private _canClear;
    private _hasConfirmButton;
    private _isMultiple;
    private _canAddItem;
    private _addItemObservable;
    private _deleteItemObservable;
    private onItemsChange;
    _label: string;
    readonly _shouldStoreItemValue: boolean;
    _valueItems: any[];
    _searchText: string;
    _hasSearchText: boolean;
    _groups: any[];
    _itemsToConfirm: any[];
    _selectedItems: any[];
    _modalComponent: IonicSelectableModalComponent;
    _filteredGroups: any[];
    _hasGroups: boolean;
    _isSearching: boolean;
    _hasPlaceholder: boolean;
    _infiniteScroll: InfiniteScroll;
    _isAddItemTemplateVisible: boolean;
    _isFooterVisible: boolean;
    _itemToAdd: any;
    _footerButtonsCount: number;
    _hasFilteredItems: boolean;
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
     *
     * @readonly
     * @default null
     * @memberof IonicSelectableComponent
     */
    readonly label: string;
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
     *
     * @readonly
     * @default ''
     * @memberof IonicSelectableComponent
     */
    searchText: string;
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    readonly isSearching: boolean;
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    readonly hasSearchText: boolean;
    value: any;
    /**
     * A list of items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
     *
     * @default []
     * @memberof IonicSelectableComponent
     */
    items: any[];
    itemsChange: EventEmitter<any>;
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    isEnabled: boolean;
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    shouldBackdropClose: boolean;
    /**
     * Modal CSS class.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    modalCssClass: string;
    /**
     * Modal enter animation.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    modalEnterAnimation: string;
    /**
     * Modal leave animation.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    modalLeaveAnimation: string;
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    readonly isOpened: boolean;
    /**
     * Determines whether Confirm button is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    isConfirmButtonEnabled: boolean;
    /**
     * Determines whether Confirm button is visible for single selection.
     * By default Confirm button is visible only for multiple selection.
     * **Note**: It is always true for multiple selection and cannot be changed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    hasConfirmButton: boolean;
    /**
     * Item property to use as a unique identifier, e.g, `'id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    itemValueField: string;
    /**
     * Item property to display, e.g, `'name'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    itemTextField: string;
    /**
     *
     * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    groupValueField: string;
    /**
     * Group property to display, e.g. `'country.name'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    groupTextField: string;
    /**
     * Determines whether to show Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    canSearch: boolean;
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    isOnSearchEnabled: boolean;
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    canClear: boolean;
    /**
     * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
     * **Note**: Infinite scroll cannot be used together with virtual scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    hasInfiniteScroll: boolean;
    /**
     * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
     * **Note**: Virtual scroll cannot be used together with infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    hasVirtualScroll: boolean;
    /**
     * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
     *
     * @default '40px'
     * @memberof IonicSelectableComponent
     */
    virtualScrollApproxItemHeight: string;
    /**
     * See Ionic VirtualScroll [approxItemWidth](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemwidth).
     *
     * @default '100%'
     * @memberof IonicSelectableComponent
     */
    virtualScrollApproxItemWidth: string;
    /**
     * See Ionic VirtualScroll [bufferRatio](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollbufferratio).
     *
     * @default 3
     * @memberof IonicSelectableComponent
     */
    virtualScrollBufferRatio: number;
    /**
     * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
     *
     * @memberof IonicSelectableComponent
     */
    virtualScrollHeaderFn: () => any;
    /**
     * A placeholder for Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
     *
     * @default 'Search'
     * @memberof IonicSelectableComponent
     */
    searchPlaceholder: string;
    /**
     * A placeholder.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    placeholder: string;
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    isMultiple: boolean;
    /**
     * Text to display when no items have been found during search.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
     *
     * @default 'No items found.'
     * @memberof IonicSelectableComponent
     */
    searchFailText: string;
    /**
     * Clear button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
     *
     * @default 'Clear'
     * @memberof IonicSelectableComponent
     */
    clearButtonText: string;
    /**
     * Add button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
     *
     * @default 'Add'
     * @memberof IonicSelectableComponent
     */
    addButtonText: string;
    /**
     * Confirm button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
     *
     * @default 'OK'
     * @memberof IonicSelectableComponent
     */
    confirmButtonText: string;
    /**
     * Close button text.
     * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
     *
     * @default 'Cancel'
     * @memberof IonicSelectableComponent
     */
    closeButtonText: string;
    /**
     * Determines whether Searchbar should receive focus when Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#focussearchbar).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    focusSearchbar: boolean;
    /**
     * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    headerColor: string;
    /**
     * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    groupColor: string;
    /**
     * Fires when item/s has been selected and Modal closed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
     *
     * @memberof IonicSelectableComponent
     */
    onChange: EventEmitter<{
        component: IonicSelectableComponent;
        value: any;
    }>;
    /**
     * Fires when the user is typing in Searchbar.
     * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
     *
     * @memberof IonicSelectableComponent
     */
    onSearch: EventEmitter<{
        component: IonicSelectableComponent;
        text: string;
    }>;
    /**
     * Fires when no items have been found.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
     *
     * @memberof IonicSelectableComponent
     */
    onSearchFail: EventEmitter<{
        component: IonicSelectableComponent;
        text: string;
    }>;
    /**
     * Fires when some items have been found.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
     *
     * @memberof IonicSelectableComponent
     */
    onSearchSuccess: EventEmitter<{
        component: IonicSelectableComponent;
        text: string;
    }>;
    /**
     * Fires when the user has scrolled to the end of the list.
     * **Note**: `hasInfiniteScroll` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    onInfiniteScroll: EventEmitter<{
        component: IonicSelectableComponent;
        text: string;
    }>;
    /**
     * Fires when Modal has been opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
     *
     * @memberof IonicSelectableComponent
     */
    onOpen: EventEmitter<{
        component: IonicSelectableComponent;
    }>;
    /**
     * Fires when Modal has been closed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
     *
     * @memberof IonicSelectableComponent
     */
    onClose: EventEmitter<{
        component: IonicSelectableComponent;
    }>;
    /**
     * Fires when an item has been selected or unselected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
     *
     * @memberof IonicSelectableComponent
     */
    onSelect: EventEmitter<{
        component: IonicSelectableComponent;
        item: any;
        isSelected: boolean;
    }>;
    /**
     * Fires when Clear button has been clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
     *
     * @memberof IonicSelectableComponent
     */
    onClear: EventEmitter<{
        component: IonicSelectableComponent;
        items: any[];
    }>;
    valueTemplate: TemplateRef<any>;
    itemTemplate: TemplateRef<any>;
    itemEndTemplate: TemplateRef<any>;
    titleTemplate: TemplateRef<any>;
    placeholderTemplate: TemplateRef<any>;
    messageTemplate: TemplateRef<any>;
    groupTemplate: TemplateRef<any>;
    groupEndTemplate: TemplateRef<any>;
    closeButtonTemplate: TemplateRef<any>;
    searchFailTemplate: TemplateRef<any>;
    addItemTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    itemIconTemplate: TemplateRef<any>;
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
     *
     * @default []
     * @readonly
     * @memberof IonicSelectableComponent
     */
    readonly itemsToConfirm: any[];
    /**
     * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
     *
     * @default 250
     * @memberof IonicSelectableComponent
     */
    searchDebounce: Number;
    /**
     * A list of items to disable.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
     *
     * @default []
     * @memberof IonicSelectableComponent
     */
    disabledItems: any[];
    /**
     * Determines whether item value only should be stored in `ngModel`, not the entire item.
     * **Note**: Item value is defined by `itemValueField`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    shouldStoreItemValue: boolean;
    /**
     * Determines whether to allow editing items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    canSaveItem: boolean;
    /**
     * Determines whether to allow deleting items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    canDeleteItem: boolean;
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    canAddItem: boolean;
    /**
     * Fires when Edit item button has been clicked.
     * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
     * **Note**: `canSaveItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
     *
     * @memberof IonicSelectableComponent
     */
    onSaveItem: EventEmitter<{
        component: IonicSelectableComponent;
        item: any;
    }>;
    /**
     * Fires when Delete item button has been clicked.
     * **Note**: `canDeleteItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
     *
     * @memberof IonicSelectableComponent
     */
    onDeleteItem: EventEmitter<{
        component: IonicSelectableComponent;
        item: any;
    }>;
    /**
     * Fires when Add item button has been clicked.
     * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
     * **Note**: `canAddItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
     *
     * @memberof IonicSelectableComponent
     */
    onAddItem: EventEmitter<{
        component: IonicSelectableComponent;
    }>;
    constructor(_modalController: ModalController, ionForm: Form, _platform: Platform, ionItem: Item, _iterableDiffers: IterableDiffers, element: ElementRef);
    initFocus(): void;
    enableIonItem(isEnabled: boolean): void;
    _click(event: UIEvent): void;
    _isNullOrWhiteSpace(value: any): boolean;
    _setHasSearchText(): void;
    _hasOnSearch(): boolean;
    _hasOnSaveItem(): boolean;
    _hasOnAddItem(): boolean;
    _hasOnDeleteItem(): boolean;
    _emitValueChange(): void;
    _emitSearch(): void;
    _emitOnSelect(item: any, isSelected: boolean): void;
    _emitOnClear(items: any[]): void;
    _emitOnSearchSuccessOrFail(isSuccess: boolean): void;
    _formatItem(item: any): string;
    _formatValueItem(item: any): string;
    _getItemValue(item: any): any;
    _getStoredItemValue(item: any): any;
    _filterItems(): void;
    _isItemDisabled(item: any): boolean;
    _isItemSelected(item: any): boolean;
    _addSelectedItem(item: any): void;
    _deleteSelectedItem(item: any): void;
    _saveItem(event: Event, item: any): void;
    _deleteItemClick(event: Event, item: any): void;
    _addItemClick(): void;
    _close(): void;
    _clear(): void;
    _getMoreItems(infiniteScroll: InfiniteScroll): void;
    _setItemsToConfirm(items: any[]): void;
    _doSelect(selectedItem: any): void;
    _select(item: any): void;
    _confirm(): void;
    private _getLabelText;
    private _areGroupsEmpty;
    private _countFooterButtons;
    private _setItems;
    private _getPropertyValue;
    private _setIonItemHasFocus;
    private _setIonItemHasValue;
    private _setHasPlaceholder;
    private propagateOnChange;
    private propagateOnTouched;
    private _setIonItemValidityClasses;
    private _toggleAddItemTemplate;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * @param item Item to add.
     * @returns Promise that resolves when item has been added.
     * @memberof IonicSelectableComponent
     */
    addItem(item: any): Promise<any>;
    /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * @param item Item to delete.
     * @returns Promise that resolves when item has been deleted.
     * @memberof IonicSelectableComponent
     */
    deleteItem(item: any): Promise<any>;
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * @returns A boolean determining whether any item has been selected.
     * @memberof IonicSelectableComponent
     */
    hasValue(): boolean;
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * @returns Promise that resolves when Modal has been opened.
     * @memberof IonicSelectableComponent
     */
    open(): Promise<any>;
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * @returns Promise that resolves when Modal has been closed.
     * @memberof IonicSelectableComponent
     */
    close(): Promise<any>;
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * @memberof IonicSelectableComponent
     */
    clear(): void;
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * @memberof IonicSelectableComponent
     */
    confirm(): void;
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * @param isSelect Determines whether to select or deselect items.
     * @param [items] Items to toggle. If items are not set all items will be toggled.
     * @memberof IonicSelectableComponent
     */
    toggleItems(isSelect: boolean, items?: any[]): void;
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToTop(): Promise<any>;
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToBottom(): Promise<any>;
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * @memberof IonicSelectableComponent
     */
    startSearch(): void;
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * @memberof IonicSelectableComponent
     */
    endSearch(): void;
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    enableInfiniteScroll(): void;
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    disableInfiniteScroll(): void;
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    endInfiniteScroll(): void;
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * @param text Text to search items by.
     * @memberof IonicSelectableComponent
     */
    search(text: string): void;
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * @memberof IonicSelectableComponent
     */
    showLoading(): void;
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * @memberof IonicSelectableComponent
     */
    hideLoading(): void;
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    showAddItemTemplate(): void;
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    hideAddItemTemplate(): void;
}
