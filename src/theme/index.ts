const theme = {
  colors: {
    background: '#191919',
    boxBackground: '#363636',
    boxShadow: '2px 2px 100px 0px rgba(0, 0, 0, 0.20)',
    text: '#CCC',
    title: '#CCC',
    linkColor: '#A7A7A7',
  },
};

export interface ITheme {
  colors: {
    background: string;
    boxBackground: string;
    boxShadow: string;
    text: string;
    title: string;
    linkColor: string;
  };
}

export default theme;
