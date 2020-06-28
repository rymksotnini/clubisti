<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_groups', function (Blueprint $table) {
            $table->id();
            $table->string('GRP_NAME');
            $table->string('GRP_ID')->nullable()->unique();
            $table->string('GRP_Desc')->nullable();
            $table->unsignedBigInteger('CREATOR_ID');
            $table->string('GRP_PASSWORD');
            $table->boolean('GRP_Activity');
            $table->timestamps();
            $table->string('group_email_verified') ->default(false);
            $table->timestamp('group_email_verified_at')->nullable();
            $table->string('group_email_verification_token');
            $table->foreign('CREATOR_ID')->references('id')->on('users')
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
        Schema::dropIfExists('users_groups');
    }
}
