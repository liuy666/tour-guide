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
            background-color: #fff;
            img {
                width: 300px;
                height: 300px;
            }
        }
    }
</style>

<template>
    <div id="use-camera">
        <section id="camera-wraper">
            <input type="file" id="camera" accept="image/*" capture="camera" @change="selectFile" />
        </section>
        <input type="file" id="camera" accept="image/*" @change="selectFile" />
        <section id="img-container">
            <img src="../assets/images/timg.jpg" alt="网络可能不太给力~" id="photo" />   
        </section>
        <p>dddddd</p>
        <p>wqwqw</p>
        <p>dddddd</p>
        <p>ddqwqwdddd</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // isDefaultImage: true,
        }
    },
    methods: {
        selectFile(changeEvent) {
            // console.log(changeEvent.target.files);
            const filesList = changeEvent.target.files; // 返回一个FileList对象,类数组类型
            const domImage = document.querySelector('#photo');

            // 异步读取文件
            const fileReader = new FileReader();
            fileReader.readAsDataURL(filesList[0]); // 返回一个基于Base64编码的data-url对象
            fileReader.onload = (loadEvent) => {
                domImage.src = loadEvent.target.result;
                domImage.file = filesList[0];
            }
        }
    }
}
</script>