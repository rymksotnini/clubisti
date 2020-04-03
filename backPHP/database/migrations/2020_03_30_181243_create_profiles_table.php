<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('phone_umber');
            $table->enum('gender', ['MALE', 'FEMALE']);
            $table->dateTime('birth_date');
            $table->string('image_url');
            $table->enum('status', ['CREATED', 'DELETED']);
            $table->unsignedBigInteger('user_id');
            $table->integer('badge_id')->unsigned();
            $table->integer('address_id')->unsigned();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('cascade');
            $table->foreign('badge_id')->references('id')->on('badges')
                ->onDelete('cascade');
            $table->foreign('address_id')->references('id')->on('addresses')
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
        Schema::dropIfExists('profiles');
    }
}
