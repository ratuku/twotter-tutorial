<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__username">@{{state.user.username}}</h1>
            <h2> {{userId}}</h2>
            <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
                    Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>Followers: </strong> {{ state.followers }}
            </div>
            <create-twoot-panel @add-twoot="addTwoot"/>
        </div>
    </div>
        <div class="user-profile__twoots-wrapper">
            <Twootitem
                    v-for="twoot in state.user.twoots"
                    :key="twoot.id"
                    :username="state.user.username"
                    :twoot="twoot"/>
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import Twootitem  from "../components/Twootitem";
    import CreateTwootPanel from "../components/CreateTwootPanel";
    import {useRoute} from 'vue-router';
    import {reactive} from 'vue';
    import {computed} from "@vue/reactivity";
    import {users} from '../assets/users';

    export default {
        name: 'UserProfile',
        components: {CreateTwootPanel, Twootitem},
        setup () {

            const route = useRoute();
            const userId = computed(() => route.params.userId);

          const state = reactive({
              followers: 0,
              user: users[userId.value-1] || users[1]
          });

          function addTwoot(twoot) {
              console.log("twwot: " + twoot);
              state.user.twoots.unshift({
                  id: state.user.twoots.length + 1,
                  content: twoot
              })
          }

          return {
              state,
              addTwoot,
              userId
          }
        }
    }
    // scope makes csss only for this component
</script>

<style lang="scss" scoped>

    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding: 50px 5%;

        .user-profile__user-panel {
            display: flex;
            flex-direction: column;
            margin-right: 50px;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            border: 1px solid #DFE3E8;

            h1 {
                margin: 2px;
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
        }

        .user-profile__twoots-wrapper {
            display: grid;
            grid-gap: 10px;
            margin-bottom: auto;
        }
    }


</style>
