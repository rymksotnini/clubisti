<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGroupsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('GRP_JOIN', ['NO_JOIN','WAIT_JOIN','MEMBER_JOIN', 'DENY_JOIN', 'CREATE_JOIN'])->default('NO_JOIN');
            $table->string('GRP_ID')->nullable();
            $table->integer('USER_GRP_ID')->default(0000);
            $table->foreign('GRP_ID')->references('GRP_ID')->on('users_groups')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
