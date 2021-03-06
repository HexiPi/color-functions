import * as React from 'react';
import * as Color from 'color';

const parseHSL = (hslColor: Color) => {
    return [ hslColor.hue(), hslColor.saturationl(), hslColor.lightness() ];
}

const parseRGB = (rgbColor: Color) => {
    return [ rgbColor.red(), rgbColor.green(), rgbColor.blue() ];
}

const getHSLString = (h: number, s: number, l: number) => {
    return `hsl(${h},${s}%,${l}%)`;
}

const getRGBString = (r: number, g: number, b: number) => {
    return `rgb(${r},${g},${b})`;
}

const harmonize = (hslColor: Color, start: number, end: number, interval: number) => {
    const colors = [];
    const [h, s, l] = parseHSL(hslColor);

    for(let i = start; i <= end; i += interval) {
        const h1 = (h + i) % 360;
        const c1 = Color(getHSLString(h1, s, l));
        colors.push(c1);
    }

    return colors;
}

export const convertHexColorToRGB = (hexColor: string) => {
    hexColor = hexColor.replace(/[^0-9a-z]/gi, '');

    const r = parseInt(hexColor.substr(0,2), 16);
    const g = parseInt(hexColor.substr(2,2), 16);
    const b = parseInt(hexColor.substr(4,2), 16);

    return getRGBString(r, g, b);
};

export const convertRGBToHexColor = (rgbColor: string) => {
    const [r, g, b] = parseRGB(Color(rgbColor));
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

export const getContrastYIQ = (rgbColor: string) => {
    const [r, g, b] = parseRGB(Color(rgbColor));
    const yiq = ((r*299) + (g*587) + (b*114)) / 1000;

    return (yiq >= 150) ? 'rgb(0,0,0)' : 'rgb(255,255,255)';
}

export const getMonochromeColor = (rgbColor: string, lightnessIndex: number) => {
    const x = 15 + (lightnessIndex * 10);
    var cs, newColor;
    const [h, s] = parseHSL(Color(rgbColor).hsl());

    cs = getHSLString(h, s, x);
    newColor = Color(cs);

    return newColor;
}

export const getComplementColor = (rgbColor: string, allColors: boolean) => (allColors) ? harmonize(Color(rgbColor).hsl(), 180, 180, 1) : harmonize(Color(rgbColor).hsl(), 180, 180, 1)[0];
export const getSplitComplementColor = (rgbColor: string, colorIndex: number, allColors: boolean) => (allColors) ? harmonize(Color(rgbColor).hsl(), 150, 210, 60) : harmonize(Color(rgbColor).hsl(), 150, 210, 60)[colorIndex];
export const getTriadicColor = (rgbColor: string, colorIndex: number, allColors: boolean) => (allColors) ? harmonize(Color(rgbColor).hsl(), 120, 240, 120) : harmonize(Color(rgbColor).hsl(), 120, 240, 120)[colorIndex];
export const getTetradicColor = (rgbColor: string, colorIndex: number, allColors: boolean) => (allColors) ? harmonize(Color(rgbColor).hsl(), 90, 270, 90) : harmonize(Color(rgbColor).hsl(), 90, 270, 90)[colorIndex];
export const getAnalogousColor = (rgbColor: string, colorIndex: number, allColors: boolean) => (allColors) ? harmonize(Color(rgbColor).hsl(), 30, 90, 30) : harmonize(Color(rgbColor).hsl(), 30, 90, 30)[colorIndex];


export const getMonochromeColors = (rgbColor: string) => {
    const colors = [];
    var cs, newColor;
    const [h, s] = parseHSL(Color(rgbColor).hsl());

    for (let x = 15; x <= 85; x += 10) {
      cs = getHSLString(h, s, x);
      newColor = Color(cs);
      colors.push(newColor.rgb());
    }

    return colors;
}

export const getCurrentPageBgColor = () => {
    const element = document.getElementsByTagName('body')[0];
    const style = window.getComputedStyle(element);

    return style.backgroundColor;
}

export const renderColorSwatch = (colorFunction: Function) => {
    const currPageBgColor = getCurrentPageBgColor();
    const colors = colorFunction(currPageBgColor, 1, true);
    colors.unshift(Color(currPageBgColor));
    const colorContainers: any = [];

    colors.forEach((color: Color) => {
        colorContainers.push(
            <div style={{ width: '100%', backgroundColor: color.string(), flex: 1 }}>{color.rgb().string()}</div>
        );
    });

    return (
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
            {colorContainers}
        </div>
    );
}