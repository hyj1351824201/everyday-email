function fn(weatherData, lifeData, word,imgurl, lovingDays) {
	// src="${imgurl}"  如果用每日随机图就换成这个
  const { daily: weatherDataDaily } = weatherData;
  const { daily } = lifeData;
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div>
        <!-- 天数 -->
        <div>
          <p>自律的第 <span style="font-size: 20px;font-weight: bold;">${lovingDays}</span> 天！</p>
		  <h3>今天要学习的知识点</h3>
		  <h4>typeScript、nodeJs、React、webpack</h4>
        </div>
        <!-- 图片 -->
        <div>
          <img
            style="width: 100%; max-width: 768px"
            src="http://m.qpic.cn/psc?/V50hNtTy19exP14cSVZd3fehVc0clkib/45NBuzDIW489QBoVep5mcXjAuQILalZncQ*yVmb2o7GuVSQq3O.9khf2u4XobdFcNDPckLl4YeJjty6GjGhX1qyLrrIjKLBfgAqmZ1gtrd4!/b&bo=OAQ4BAAAAAABFzA!&rf=viewer_4"
            alt="图片"
          />
        </div>
        <!-- 每日一句 -->
        <div>
          <p style="font-size: 14px; text-indent: 2em; font-style: italic;">
            ${word}
          </p>
        </div>
        <!-- 天气 -->
        <div>
          <p>
            <b>今日气温:</b>
            <span>${weatherDataDaily[0].tempMin}°C - ${weatherDataDaily[0].tempMax}°C</span>
          </p>
          <ul>
            <li style="margin-bottom: 10px">
              ${daily[1].name}(${daily[1].category}):
              ${daily[1].text}
            </li>
            <li style="margin-bottom: 10px">
              ${daily[2].name}(${daily[2].category}):
              ${daily[2].text}
            </li>
            <li style="margin-bottom: 10px">
              ${daily[0].name}(${daily[0].category}):
              ${daily[0].text}
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  `;
}

module.exports = fn;
