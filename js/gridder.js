var gOverride = {
          urlBase: 'http://gridder.andreehansson.se/releases/latest/',
          gColor: '#EEEEEE',
          gColumns: 8,
          gOpacity: 0.35,
          gWidth: 12,
          pColor: '#C0C0C0',
          pHeight: 15,
          pOffset: 0,
          pOpacity: 0.55,
          center: true,
          gEnabled: true,
          pEnabled: false,
          setupEnabled: true,
          fixFlash: true,
          size: 960
        };
        createGridder = function() {
          document.body.appendChild(
            document.createElement('script'))
            .src='http://peol.github.com/960gridder/releases/latest/960.gridder.js';
}
