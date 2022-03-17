/**
 * This file was generated from NativeRegionsMap.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface NativeRegionsMapProps<Style> {
    name: string;
    style: Style[];
    postalCode?: DynamicValue<string>;
}

export interface NativeRegionsMapPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    postalCode: string;
}
