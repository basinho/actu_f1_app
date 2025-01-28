
<template>
    <nav>
        <div class="button-navBar">
            <div id="recent-icon">
                <img src="../assets/recent_icon.svg">
                <p>Récents</p>
            </div>
            <div id="suivis-icon">
                <img src="../assets/suivis_icon.svg">
                <p>Suivis</p>
            </div>
            <div id="course-icon">
                <img src="../assets/course_icon.svg">
                <p>Courses</p>
            </div>
            <div id="classement-icon">
                <img src="../assets/classement_icon.svg">
                <p>Classements</p>
            </div>
            <div id="plus-icon">
                <img src="../assets/plus_icon.svg">
                <p>Plus</p>
            </div>
            
        </div>
    </nav>
</template>

<script></script>

<style scoped>
nav{
    background-color: red;
    height: 10%;
    width: 100vw;
    position: absolute;
    bottom: 0;
    margin: 0;
    right: 0;
    padding: 0;
}
p{
    color: white;
    font-family: "Pathway Extreme", serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
    font-variation-settings:
    "wdth" 100;
}


#recent-icon,#suivis-icon,#course-icon,#classement-icon,#plus-icon{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.button-navBar{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 20%;
    gap: 2rem;
}
</style>