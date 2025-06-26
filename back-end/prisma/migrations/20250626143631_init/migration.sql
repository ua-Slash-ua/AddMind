-- CreateTable
CREATE TABLE "ModelUser" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "create_dt" TIMESTAMP(3) NOT NULL,
    "update_dt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModelUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModelUserMeta" (
    "id" SERIAL NOT NULL,
    "main_id" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ModelUserMeta_pkey" PRIMARY KEY ("id")
);
