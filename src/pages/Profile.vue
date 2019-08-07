<template>
  <div v-if="$auth.loggedIn">
    <table>
      <tr>
        <th>email</th>
        <td>{{$auth.user.email}}</td>
      </tr>
      <tr>
        <th>nickname</th>
        <td>{{$auth.user.nickname}}</td>
      </tr>
      <tr>
        <th>picture</th>
        <td><img :src="$auth.user.picture" width="100"/></td>
      </tr>
    </table>
  </div>
</template>
