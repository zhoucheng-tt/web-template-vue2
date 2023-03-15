/*
 * @Description: 高德地图封装类
 * @Author: zhoucheng
 * @Github:
 * @Date: 2022-07-18 14:26:00
 * @LastEditors: zhoucheng
 */
class Amap {
  // 地图实例
  map = null
  // 点标记集合
  markerObj = {}
  // 点标记展示的图标集合
  markerIconObj = {}
  // 信息窗口集合
  infoWindowObj = {}
  infoWindow = null

  // new时创建方法
  constructor(container, center, markerIconObj, infoWindowObj) {
    this.map = new window.AMap.Map(container, {
      mapStyle: 'amap://styles/whitesmoke',// 地图样式
      center,// 中心点坐标
      zoom: 17,// 缩放等级
      pitch: 60,// 偏移量
      viewMode: '3D',//使用3D视图
      zooms: [3, 20],// 缩放范围
      resizeEnable: true,
      expandZoomRange: true,
    })

    this.markerIconObj = markerIconObj
    this.infoWindowObj = infoWindowObj
  }

  // 设置地图样式 'amap://styles/whitesmoke'
  setMapStyle (mapStyle) {
    this.map.setMapStyle(mapStyle);
  }

  // 设置地图中心点 [111.924832, 31.910907]
  setCenter (center) {
    this.map.setCenter(center);
  }

  // 设置地图中心点和缩放级别 18
  setZoom (zoom) {
    this.map.setZoom(zoom)
  }

  // 设置点标记
  setMarker (id, markDataList) {
    let markerList = []
    // 如果点标记数组存在直接设置
    if (this.getMarkerObj[id]) {
      markerList = this.getMarkerObj(id)
    } else {
      markDataList.forEach(item => {
        let marker = new window.AMap.Marker({
          position: new window.AMap.LngLat(item.longitude, item.latitude),
          offset: new window.AMap.Pixel(-10, -10),
          icon: this.markerIconObj[id].mapIcon,
          title: item.title,
          data: item,
          id,
        });
        markerList.push(marker)
        let self = this
        // 绑定点击事件
        marker.on('click', function (ev) {
          let id = ev.target.w.id
          let data = ev.target.w.data
          self.clickMark(id, data)
          self.setInfoWindow(id, data)
        })
      });
      this.setMarkerObj(id, markerList)
    }
    this.map.add(markerList);
  }

  // 点标记点击事件
  clickMark (id, data) {
    console.log(id, data, '点标记点击事件');
  }

  // 删除点标记
  removeMarker (id) {
    let markerList = this.getMarkerObj(id)
    if (markerList) {
      this.map.remove(markerList)
    }
  }

  // 设置信息窗口
  setInfoWindow (id, text) {
    if (!this.infoWindowObj[id]) {
      console.error("InfoWindow.content is " + this.infoWindowObj[id]);
    }
    this.infoWindow = new window.AMap.InfoWindow({
      isCustom: true,
      anchor: 'middle-right',
      content: this.infoWindowObj[id],
      offset: new window.AMap.Pixel(-10, 0)
    });
    this.infoWindow.open(this.map, [text.longitude, text.latitude]);
  }

  // 关闭信息窗口
  closeInfoWindow () {
    this.infoWindow.close();
  }

  // 轨迹回放设置点标记
  setOnlyMarker (lineArr) {
    const marker = new window.AMap.Marker({
      icon: "https://webapi.amap.com/images/car.png",
      position: [116.478935, 39.997761],
      offset: new window.AMap.Pixel(-15, -60),
      autoRotation: false,
    });
    this.map.add(marker)
    var passedPolyline = new window.AMap.Polyline({
      map: this.map,
      strokeColor: "#AF5", //线颜色
      strokeWeight: 6, //线宽
    });
    marker.on('moving', function (e) {
      passedPolyline.setPath(e.passedPath);
    });
    // this.map.setFitView(); // 视角跟随
    marker.moveAlong(lineArr, 200); // 绘制
  }

  // 获取高德地图原生对象
  getAMap () {
    return this.map
  }
  // 获取点标记集合
  getMarkerObj (id) {
    return this.markerObj[id]
  }
  // 设置点标记集合
  setMarkerObj (id, markerList) {
    return this.markerObj[id] = markerList
  }
}

export default Amap