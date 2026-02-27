const cityBg = new Image(); cityBg.src = 'assets/city/city_background.png?v=2026';
    const gymBldg = new Image(); gymBldg.src = 'assets/city/gym_building.png?v=2026';
    const shopBldg = new Image(); shopBldg.src = 'assets/city/tek_shop_building.png?v=2026';
    const busSpr = new Image(); busSpr.src = 'assets/city/bus_sprite.png?v=2026';
    
    let cityAssetsLoaded = 0;
    const totalCityAssets = 4;
    const onCityAssetLoad = () => cityAssetsLoaded++;
    cityBg.onload = onCityAssetLoad;
    gymBldg.onload = onCityAssetLoad;
    shopBldg.onload = onCityAssetLoad;
    busSpr.onload = onCityAssetLoad;

    const introImgs = {
      player: new Image(), svitolina: new Image(), wu: new Image()
    };
    introImgs.player.src = 'assets/intro/intro_1_player.png?v=2026';
    introImgs.svitolina.src = 'assets/intro/intro_2_svitolina.png?v=2026';
    introImgs.wu.src = 'assets/intro/intro_3_wu.png?v=2026';

    let sprLoaded = false, oppLoaded = false, titleBgLoaded = false;