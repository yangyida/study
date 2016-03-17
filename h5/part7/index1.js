window.onload = function(){

    /**
     * 标签
     * audio video
     * source
     *
     * 视频内容
     * 容器文件，类似于压缩了一组文件
     * 音频轨道
     * 视频轨道
     * 元数据：封面 标题 字幕
     * 格式：.avi .flv .mp4 .mkv .ogv等
     *
     * 媒体元素
     * controls：显示或隐藏用户界面
     * autoplay：媒体是否自动播放
     * loop：媒体是否循环播放
     * currentTime：开始到播放现在所用时间
     * duration：媒体总时间（只读）
     * volume：0.0-1.0的音量相对值
     * muted：是否静音
     * autobuffer：开始的时候是否缓冲加载，autoplay的时候，忽略此属性
     *
     * paused：媒体是否暂停（只读）
     * ended：媒体是否播放完毕（只读）
     * error：媒体发生错误的时候，返回错误代码（只读）
     * currentSrc：以字符串的形式返回媒体地址（只读）
     *
     * play():媒体播放
     * pause()：媒体暂停
     * load()：重新加载媒体
     *
     * loadstart progress suspend emptied stalled play pause
     * loadedmetadata loadeddata waiting playing canplay
     * canplaythrough seeking seeked timeupdate ended
     * ratechage durationchange volumechange
     *
     * poster：视频播放前的预览图片
     * width、height：设置视频的尺寸
     * videoWidth、videoHeight：视频的实际尺寸(最佳尺寸)(只读)
     *
     */

    var o = document.getElementById("music");

}