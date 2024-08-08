import  "./css/all.css"
function massnger() {
  return (
    <div class="container">

        <div class="header">
            <div class="logo">
            <span class="spaOne"></span>
            <img src="" alt="" />
            <h5>Haedara Salloum </h5>
            <span class="spaTwo">نشط الان</span></div>
            <div class="left">
                <i class="fas fa-list"></i>
                <h1>الدردشات</h1>
            </div>
            <div class="right">
                <i class="fas fa-pencil"></i>
            </div>
        </div>  
        <div class="contain-list">
            <div class="close"><i class="fas fa-close"></i></div>
            <div class="info">
                            <div class="left">
                    <img src="" alt=""/>
                    <h2>haedara salloum</h2>
                </div>
               <div class="right"><i class="fas fa-gear"></i></div>
            </div>
            <div class="options">
                <div class="one" id="one">
                    <i class="fas fa-message"></i>
                    <h3>الدردشات</h3>
                </div>
                <div class="one" id="order-sending-button">
                    <i class="fas fa-sms"></i>
                    <h3>طلبات المراسلة</h3>
                </div>
                <div class="one" id="archive-message-button">
                    <i class="fas fa-archive"></i>
                    <h3>الارشيف</h3>
                </div>
                
            </div>
            
            <div class="setting">
                <div class="one"><i class="fas fa-arrow-left"></i>
                <h2>انا</h2></div>  
                <div class="setting-options">
                    <div class="personal-info">
                        <label for="upload">
                            <img src="D:\FRONT END\المشروع\img\ic4.png" alt="" />
                            </label>
                        <i class="fas fa-camera"></i>
                        <input type="file" name="" id="upload" />
                        <input type="text" id="Updateusername" disabled placeholder="haedara salloum" />
                        <p id="updateNameButton">Update</p>
                        <p>كتابة ملاحظة</p>
                    </div>
                    <div class="options">
                        <div class="option-1">
                            <div class="op" id="op-black" onclick="black3();" ondblclick="black4();">
                                <img src="D:\FRONT END\المشروع\img\تنزيل__15_-removebg-preview.png" alt="" />
                                <h3>الوضع المظلم</h3>
                            </div>
                        </div>
                        <div class="option-2">
                            <div class="op" onclick="updateName();">
                                <img src="D:\FRONT END\المشروع\img\تنزيل__13_-removebg-preview.png" alt="" />
                                <h3>اسم المستخدم</h3>
                            </div>
                        </div>
                    </div>
                    <div class="filters">
                        <ul>
                          <div class="onetwo">
                            <li>
                                <label htmlFor="saturate">Saturate</label>
                                <input type="range" id="saturate" min="0" max="200" value="100" />
                            </li>
                            <li>
                                <label htmlFor="contrast">Contrast</label>
                                <input type="range" id="contrast" min="0" max="200" value="100" />
                            </li>
                            <li>
                                <label htmlFor="brightness">Brightness</label>
                                <input type="range" id="brightness" min="0" max="200" value="100" />
                            </li>
                          </div>
                           <div class="twoone">
                            <li>
                                <label htmlFor="sepia">Sepia</label>
                                <input type="range" id="sepia" min="0" max="200" value="0" />
                            </li>
                            <li>
                                <label htmlFor="grayscale">Grayscale</label>
                                <input type="range" id="grayscale" min="0" max="1" step="0.1" value="0" />
                            </li>
                            <li>
                                <label htmlFor="hue-rotate">Hue-rotate</label>
                                <input type="range" id="hue-rotate" min="0" max="350" value="0" />
                            </li>
                           </div>
                        <i class="fas fa-refresh" onclick="zero();"></i>
                        </ul>
                    </div>
                </div>
        </div> 
    </div>
    <div class="body">
        <div class="left">
            <div class="search">
                <span><i class="fas fa-search"></i>بحث 
                <input onclick="two();" type="search" name="" id="" placeholder="User-Name" /><i onclick="one()" class="fas fa-refresh" ></i></span>
            </div>
            <div class="images-person-active">
               <div class="one-frinds">
                <div class="image-name">
                    <div class="friends">
                        <img src="D:\FRONT END\المشروع\img\patrick-tomasso-5hvn-2WW6rY-unsplash.jpg" alt="" />
                        <h3>haedara hasan</h3>
                        <span>hi</span>
                        </div>
                </div>
                <div class="icon-archive">
                    <i class="fas fa-archive"></i>
                </div>
               </div>
               <div class="one-frinds">
                <div class="image-name">
                    <div class="friends">
                        <img src="D:\FRONT END\المشروع\img\patrick-tomasso-5hvn-2WW6rY-unsplash.jpg" alt="" />
                        <h3>haedara ganem</h3>
                        <span>hi</span>
                        </div>
                </div>
                <div class="icon-archive">
                    <i class="fas fa-archive"></i>
                </div>
               </div>
               <div class="one-frinds">
                <div class="image-name">
                    <div class="friends">
                        <img src="D:\FRONT END\المشروع\img\patrick-tomasso-5hvn-2WW6rY-unsplash.jpg" alt="" />
                        <h3>Aya ali</h3>
                        <span>hi</span>
                        </div>
                </div>
                <div class="icon-archive">
                    <i class="fas fa-archive"></i>
                </div>
               </div>
               <div class="one-frinds">
                <div class="image-name">
                    <div class="friends">
                        <img src="D:\FRONT END\المشروع\img\patrick-tomasso-5hvn-2WW6rY-unsplash.jpg" alt="" />
                        <h3>ahmed samer</h3>
                        <span>hi</span>
                        </div>
                </div>
                <div class="icon-archive">
                    <i class="fas fa-archive"></i>
                </div>
               </div>
               <div class="one-frinds">
                <div class="image-name">
                    <div class="friends">
                        <img src="D:\FRONT END\المشروع\img\patrick-tomasso-5hvn-2WW6rY-unsplash.jpg" alt="" />
                        <h3>ahmed ali</h3>
                        <span>hi</span>
                        </div>
                </div>
                <div class="icon-archive">
                    <i class="fas fa-archive"></i>
                </div>
               </div>
               <div class="one-frinds">
                <div class="image-name">
                    <div class="friends">
                        <img src="D:\FRONT END\المشروع\img\patrick-tomasso-5hvn-2WW6rY-unsplash.jpg" alt="" />
                        <h3>haedara ali</h3>
                        <span>hi</span>
                        </div>
                </div>
                <div class="icon-archive">
                    <i class="fas fa-archive"></i>
                </div>
               </div>
            </div>
        </div>

        <div class="right">
            <div class="social">
                <div class="media">
                    <img src="D:\FRONT END\المشروع\img\تنزيل (8).png" alt="" />
                    <img src="D:\FRONT END\المشروع\img\تنزيل (9).png" alt="" />
                    <img src="D:\FRONT END\المشروع\img\تنزيل (11).png" alt="" />
                    <img src="D:\FRONT END\المشروع\img\تنزيل (12).png" alt="" />
                </div>
            </div>
        </div>
    </div>
    <div class="sendMessge">
        <div class="header2">
            <div class="left">
                <i class="fas fa-arrow-left"></i>
                <div class="photoNameUser">
                    <h3></h3>
                </div>
                
            </div>
            <div class="right">
            <i class="fas fa-phone"></i>
            <i class="fas fa-video"></i>
            </div>
        </div>
        <div class="bodyMessage">
            <div class="bodysend">
                <div class="left">
              
                </div>
                <div class="bodyrecive">
                 
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="left">
                <i class="fas fa-plus"></i>
                <i class="fas fa-camera camera"></i>
                <label for="image">
                    <i class="fas fa-file-image"></i>
                </label>
                    <input type="file" id="image" />
                <i class="fas fa-microphone-alt"></i>
            </div>
            <div class="right">
                <span for="messge" class="span"><h4>Aa</h4>
                <input type="text" id="messge" /> <i class="fas fa-smile"></i></span>
                <img src="D:\FRONT END\المشروع\img\تنزيل (12).png" alt="" />
            </div>
        </div>
    </div>
    <div class="order-sending">
        <div class="header">
            <h3>طلبات المراسلة</h3>
        </div>
        <div class="order-body">
            <p>افتح دردشة للتعرف على مزيد من المعلومات عن الشخص الذي ارسلها.لن يعرف هذا الشخص انك رايت الرسالة حتى اقوم بالرد.</p>
            <div class="order-recived">
                <div class="one-order" onclick="orderRecived();">
                    <img src="D:\FRONT END\المشروع\img\michal-kubalczyk-WecngmAT-KY-unsplash.jpg" alt="" />
                    <div class="user-message">
                        <span class="user-name">Hala Ahmed</span>
                        <span>haedara hasan salloum </span>
                    </div>
                   </div>
                   <div class="one-order">
                    <img src="D:\FRONT END\المشروع\img\michal-kubalczyk-WecngmAT-KY-unsplash.jpg" alt="" />
                    <div class="user-message">
                        <span class="user-name">
                            Hala Ahmed
                        </span>
                        <span>haedara hasan salloum </span>
                    </div>
                   </div> 
            </div>
        </div>
        <div class="order-footer">
            <i class="fas fa-sms"></i>
            <h4 onclick="orderFooter();">الانتقال الى الصفحة الرئيسية</h4>
        </div>
    </div>
    <div class="archive-message">
        <div class="header">
            <h3> الارشيف</h3>
        </div>
        <div class="archive-body">
            <div class="archive-recived">
            
            </div>
        </div>
        <div class="archive-footer">
            <i class="fas fa-sms"></i>
            <h4 onclick="orderFooter();">الانتقال الى الصفحة الرئيسية</h4>
        </div>
    </div>
    </div>
    
  )
}

export default massnger
