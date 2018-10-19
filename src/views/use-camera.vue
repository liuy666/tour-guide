<style lang="less" scoped>
    #use-camera {
        height: 100%;
        background-color: #ccc;
        #camera-wraper {
            position: relative;
            width: 140px;
            height: 150px;
            background: url('../assets/images/test-camera.png');
            background-size: 140px 150px;
            #camera {
                width: 140px;
                height: 150px;
                position: absolute;
                opacity: 0;
            }
        }
        #img-container {
            width: 300px;
            height: 300px;
        }
    }
</style>

<template>
    <div id="use-camera">
        <section id="camera-wraper">
            <input type="file" id="camera" accept="image/*" capture="camera" @change="selectFile" />
        </section>
        <section id="img-container">
            <img style="width: 300px;" src="../assets/images/timg.jpg" alt="网络可能不太给力~" />
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: '../assets/images/timg.jpg',
        }
    },
    methods: {
        selectFile(changeEvent) {
            console.log(changeEvent.target.files);
            const domInput = document.querySelector('#img-container');
            const filesList = changeEvent.target.files; // 返回一个FileList对象,类数组类型

            // 创建图片元素
            let img = document.createElement('img');
            img.style.width = '300px';
            img.style.height = '300px';

            // 异步读取文件
            const fileReader = new FileReader();
            fileReader.readAsDataURL(filesList[0]); // 返回一个基于Base64编码的data-url对象
            fileReader.onload = (loadEvent) => {
                img.src = loadEvent.target.result;
                img.file = filesList[0];
                domInput.appendChild(img);
            }
        }
    }
}
</script>