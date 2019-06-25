// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { InputTextFabric } from "../../../Components/Inputs/InputTextFabric";
import * as TestUtils from "../../TestUtils";
import { initializeIcons } from "office-ui-fabric-react";

initializeIcons();

describe("InputTextExtended", () => {
    it("should be rendered successfully", () => {
        let input = new InputTextFabric();

        expect(input).toBeDefined();
        expect(input.render()).toBeDefined();
    });

    it("renders int text multiline correctly", () => {
        let input = TestUtils.renderExtendedComponent(InputTextFabric, {
            "type": "Input.Text",
            "id": "input3",
            "placeholder": "enter comment",
            "maxLength": 500,
            "isMultiline": true,
            "value": "This value was pre-filled",
        });

        expect(input).toMatchSnapshot();
    });

    it("renders int text single line correctly", () => {
        let input = TestUtils.renderExtendedComponent(InputTextFabric, {
            "type": "Input.Text",
            "id": "input3",
            "placeholder": "enter comment",
            "maxLength": 500,
            "isMultiline": false,
            "value": "This value was pre-filled",
        });

        expect(input).toMatchSnapshot();
    });

    it("can set initial value", () => {
        let el = TestUtils.renderExtendedComponent(InputTextFabric, {
            "type": "Input.Text",
            "id": "input3",
            "placeholder": "enter comment",
            "maxLength": 500,
            "value": "This value was pre-filled",
        });

        expect(el).toBeDefined();
        let inputElement = el.querySelector("input");
        expect(inputElement).not.toBe(null);
        expect(inputElement.getAttribute("value")).toBe("This value was pre-filled");
    });

    it("can render placeholder", () => {
        let el = TestUtils.renderExtendedComponent(InputTextFabric, {
            "type": "Input.Text",
            "id": "blah",
            "placeholder": "enter comment",
        });

        expect(el).toBeDefined();
        let inputElement = el.querySelector("input");
        expect(inputElement).not.toBe(null);
        expect(inputElement.getAttribute("placeholder")).toBe("enter comment");
    });

    it("can get json name", () => {
        expect(new InputTextFabric().getJsonTypeName()).toBe("Input.Text");
    });
});