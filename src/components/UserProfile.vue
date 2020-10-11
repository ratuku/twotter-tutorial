<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <H1 class="user-profile__username">@{{user.username}}</H1>
            <div class="user-profile__admin-badge" v-if="user.isAdmin">
                    Admin
            </div>
            <div class="user-profile__admin-badge" v-else>
                Not Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>Followers: </strong> {{ followers }}
            </div>
        </div>
        <div class="user-profile__twoots-wrapper">
            <Twootitem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot"
                       @favourite="toggleFavourite"/>
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'

    import Twootitem from "./Twootitem";
    export default {
        name: 'UserProfile',
        components: {Twootitem},
        data(){
            return {
                followers: 0,
                user: {
                    id: 1,
                    username: '_JosueNsumba',
                    firstName: 'Josue',
                    lastName: 'Nsumba',
                    email: 'josuensumba@gmail.com',
                    isAdmin: true,
                    twoots: [
                        {id: 1, content: 'Twoot is Amazing!'},
                        {id: 2, content: "Don't forget to subscriber to the Earth is Square!"}
                    ]
                }
            }
        },
        computed: {
            fullName() {
                return `${this.user.firstName} ${this.user.lastName}`
            }
        },
        watch: {
            // same name as what u want to watch
            followers(newFollowCount, oldFollowCount){

                if(oldFollowCount < newFollowCount) console.log(`${this.user.username}
      has gained a follower!`);
            }
        },
        methods: {
            followUser() {
                this.followers++
            },
            toggleFavourite(id) {
                console.log(`Favourite Tweet #${id}`);
            }
        },
        mounted() {
            this.followUser();
        }
    }
</script>

<style>

    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 100%;
        padding: 50px 5%;
    }

    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
    }

    .user-profile__admin-badge {
        background: rebeccapurple;
        color: white;
        border-radius: 5px;
        margin-right: auto;
        padding: 0px 10px;
        font-weight: bold;
        margin-top: 5px;
    }

    h1 {
        margin: 2px;
    }
</style>
