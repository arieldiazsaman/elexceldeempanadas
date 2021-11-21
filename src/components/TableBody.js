import React from "react";

export const TableBody = (names, flavors) => {
    const flavorKeys = Object.keys(flavors);
    const nameKeys = Object.keys(names);
    return flavorKeys.map((flavorKey) => {
        let sum = 0;
        return (
            <tr>
                <td>{flavors[flavorKey]}</td>
                {nameKeys.map((nameKey) => {
                    const flavorAmount = names[nameKey].flavors[flavorKey];
                    if (flavorAmount) sum += flavorAmount;
                    return <td>{flavorAmount || 0}</td>;
                })}
                <td>{sum}</td>
            </tr>
        );
    });
};