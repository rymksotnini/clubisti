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
        Schema::create('groups', function (Blueprint $table) {
            $table->id();
            $table->string('GRP_NAME');
            $table->string('GRP_ID')->nullable();
            $table->string('GRP_Desc')->nullable();
            $table->unsignedBigInteger('GRP_CREATOR');
            $table->string('GRP_PASSWORD');
            $table->boolean('GRP_Activity');
            $table->timestamps();
            $table->foreign('GRP_CREATOR')->references('id')->on('users')
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
        Schema::dropIfExists('groups');
    }
}
