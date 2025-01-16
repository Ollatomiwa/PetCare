<template>
    <section>
        <div class="heading">
            <h1>HELLO?</h1>
        </div>
        <div class="content">
            <h2>Looks like you're lost in the woods </h2>
            <a href="#">Take Me Home</a>
        </div>
    </section>
</template>
<script>
    export default {
        name:"PageNotFound"
    }
</script>

<style scoped>
    body {
        margin:0;
        min-height:100vh;
        font-family: 'Red Hat Display' sans-serif ;
        background: #eee;
    }
    section {
        height: 100vh;
        background-image: url(../assets/img/image2.png);
        background-size: cover;
        animation: bg 1,5s ease-in-out;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .content {
        position: relative;
        z-index: 2;
        text-align: center;
        padding: 3em 1em;
        color:'#fff';
 }



    .content h2 {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0.1em 0 3em 0;
        color: #dbdbdb;
    }

    .content a {
        color: #000;
        text-decoration: none;
        background:#fff;
        padding: 0.4em 2em;
        border-radius: 3em;
        transition: 0.4s;
    }

    .content a:hover {
        background:#000;
        color: #fff;
    }

    .heading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: url(../assets/img/image1.png) no-repeat center;
        background-size: cover;
        animation: bg2 1.5s ease-in-out;
        overflow: hidden;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    section h1 {
        color: rgba(255, 255, 255, 0.8);
        font-size: 9em;
        position: absolute;
        z-index: 1;
    }

    @media screen and (max-height:560px) {
        section {
            height: 40em;
        }
    }

    @media screen and (max-width:560px) {
        section {
            font-size: 14px;
        }
    } 

    @media screen and (min-width:1050px) {
        section {
            font-size: 18px;
        }
    }

    @keyframes bg {
        0% {
            background-position: center -5em;
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            background-position: center;
        }
    }
    @keyframes bg2 {
        0% {
            background-position: center 10em;
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            background-position: center;
        }
    }


    
</style>