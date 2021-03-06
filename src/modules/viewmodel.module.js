import * as ko from "knockout";
import * as filter from "./filter.module";

const viewmodel = {
    text: ko.observable("foo"),
    filters: ko.observableArray()
};

export function load() {
    ko.applyBindings(viewmodel);
}

export function getVM() {
    return viewmodel;
}

export function addFilterPreview(id, data) {
    viewmodel.filters.push(
        ko.observable({
            id: ko.observable(id),
            url: data,
            activate() {
                filter.activate(id);
            }
        })
    );
}
